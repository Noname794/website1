package com.websiteElectronics.websiteElectronics.Controllers.ExportToExcel;

import com.websiteElectronics.websiteElectronics.Dtos.OrdersDto;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.List;

public class OrdersExport {
    public static void exportToCsv(List<OrdersDto> customers, OutputStream os) throws IOException {
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, StandardCharsets.UTF_8));
        writer.write("ID,Status,Order Date,Total Amount,Customer ID,Payment Method ID,Shipping Method ID");
        writer.newLine();
        List<String> lines = customers.parallelStream()
                .map(c -> {
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                    String orderDate = (c.getOrderDate() != null) ? sdf.format(c.getOrderDate()) : "";

                    return String.format("%d,%s,%s,%d,%d,%d,%d",
                            c.getId(),
                            safe(c.getStatus()),
                            orderDate,
                            c.getTotalAmount(),
                            (c.getCustomerId() != null ? c.getCustomerId().getId() : 0),
                            (c.getPaymentMethodId() != null ? c.getPaymentMethodId().getId() : 0),
                            (c.getShippingMethodId() != null ? c.getShippingMethodId().getId() : 0)
                    );
                })
                .toList();

        for (String line : lines) {
            writer.write(line);
            writer.newLine();
        }
        writer.flush();
    }


    private static String safe(String s) {
        if (s == null) return "";

        if (s.contains(",") || s.contains("\n") || s.contains("\"")) {
            s = s.replace("\"", "\"\"");
            return '"' + s + '"';
        }
        return s;
    }
}
