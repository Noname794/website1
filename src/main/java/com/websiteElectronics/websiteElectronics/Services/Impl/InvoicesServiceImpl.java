package com.websiteElectronics.websiteElectronics.Services.Impl;

import com.websiteElectronics.websiteElectronics.Collections.Invoices;
import com.websiteElectronics.websiteElectronics.Dtos.InvoicesDto;
import com.websiteElectronics.websiteElectronics.Entities.Orders;
import com.websiteElectronics.websiteElectronics.Mappers.InvoicesMapper;
import com.websiteElectronics.websiteElectronics.Repositories.InvoicesRepository;
import com.websiteElectronics.websiteElectronics.Services.EmailService;
import com.websiteElectronics.websiteElectronics.Services.InvoiceFileService;
import com.websiteElectronics.websiteElectronics.Services.InvoicesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class InvoicesServiceImpl implements InvoicesService {

    private static final Logger logger = LoggerFactory.getLogger(InvoicesServiceImpl.class);

    private final InvoicesRepository invoicesRepository;
    private final InvoiceFileService invoiceFileService;
    private final EmailService emailService;

    @Autowired
    public InvoicesServiceImpl(InvoicesRepository invoicesRepository,
                               InvoiceFileService invoiceFileService,
                               EmailService emailService) {
        this.invoicesRepository = invoicesRepository;
        this.invoiceFileService = invoiceFileService;
        this.emailService = emailService;
    }

    @Override
    public InvoicesDto generateInvoice(Long orderId, Long customerId, String fileUrl, int expireAt) {
        Invoices invoices = new Invoices();
        invoices.setOrderId(orderId);
        invoices.setCustomerId(customerId);
        invoices.setFileUrl(fileUrl);
        invoices.setCreatedAt(LocalDateTime.now());
        invoices.setExpireAt(LocalDateTime.now().plusMinutes(expireAt));

        Invoices savedInvoices = invoicesRepository.save(invoices);
        return InvoicesMapper.mapToDto(savedInvoices);
    }

    @Override
    public InvoicesDto generateAndSendInvoice(Orders order, int expireMinutes) throws Exception {
        try {
            if (invoicesRepository.existsByOrderId((long) order.getId())) {
                Optional<Invoices> existingInvoice = invoicesRepository.findByOrderId((long) order.getId());
                if (existingInvoice.isPresent()) {
                    return InvoicesMapper.mapToDto(existingInvoice.get());
                }
            }

            String filePath = invoiceFileService.createInvoiceFile(order);

            Invoices invoice = new Invoices();
            invoice.setOrderId((long) order.getId());
            invoice.setCustomerId((long) order.getCustomer().getId());
            invoice.setFileUrl(filePath);
            invoice.setCreatedAt(LocalDateTime.now());
            invoice.setExpireAt(LocalDateTime.now().plusMinutes(expireMinutes));

            Invoices savedInvoice = invoicesRepository.save(invoice);

            String customerEmail = order.getCustomer().getEmail();
            String subject = "Hóa đơn đơn hàng:" + order.getId();
            String emailContent = buildEmailContent(order);

            emailService.sendInvoiceEmail(customerEmail, subject, emailContent, filePath);

            return InvoicesMapper.mapToDto(savedInvoice);

        } catch (Exception e) {
            logger.error("Could not generate and send invoice for order ID: {}", order.getId(), e);
            throw new Exception("Failed to generate and send invoice: " + e.getMessage(), e);
        }
    }

    @Override
    public void deleteExpiredInvoices() {

    }

    private String buildEmailContent(Orders order) {
        StringBuilder content = new StringBuilder();
        content.append("<html><body>");
        content.append("<h2>Xin chào ").append(order.getCustomer().getFirstName())
               .append(" ").append(order.getCustomer().getLastName()).append(",</h2>");
        content.append("<p>Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!</p>");
        content.append("<p>Đơn hàng của bạn đã được thanh toán thành công.</p>");
        content.append("<h3>Thông tin đơn hàng:</h3>");
        content.append("<ul>");
        content.append("<li><strong>Mã đơn hàng:</strong> ").append(order.getId()).append("</li>");
        content.append("<li><strong>Tổng tiền:</strong> ").append(String.format("%,d VNĐ", order.getTotalAmount())).append("</li>");
        content.append("<li><strong>Trạng thái:</strong> ").append(order.getStatus()).append("</li>");
        content.append("</ul>");
        content.append("<p>Hóa đơn chi tiết được đính kèm trong email này.</p>");
        content.append("<p>Trân trọng,<br/>Đội ngũ hỗ trợ khách hàng</p>");
        content.append("</body></html>");
        return content.toString();
    }

    @Override
    public Optional<InvoicesDto> getInvoiceByOrderId(Long orderId) {
        try {
            Optional<Invoices> invoice = invoicesRepository.findByOrderId(orderId);
            return invoice.map(InvoicesMapper::mapToDto);
        } catch (Exception e) {
            logger.error("Could not find invoice for order ID: {}", orderId, e);
            return Optional.empty();
        }
    }

    @Override
    public List<InvoicesDto> getInvoicesByCustomerId(Long customerId) {
        try {
            List<Invoices> invoices = invoicesRepository.findByCustomerId(customerId);
            return invoices.parallelStream()
                    .map(InvoicesMapper::mapToDto)
                    .toList();
        } catch (Exception e) {
            logger.error("Could not get invoices for customer ID: {}", customerId, e);
            return List.of();
        }
    }

    @Override
    public boolean hasInvoice(Long orderId) {
        try {
            return invoicesRepository.existsByOrderId(orderId);
        } catch (Exception e) {
            logger.error("Could not find invoice for order ID: {}", orderId, e);
            return false;
        }
    }
}
