package com.websiteElectronics.websiteElectronics.Controllers.ExportToExcel;

import com.websiteElectronics.websiteElectronics.Dtos.OrderDetailsDto;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class OrdersDetailExport {


    public static void exportToCsv(List<OrderDetailsDto> customers, OutputStream os) throws IOException {
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, StandardCharsets.UTF_8));
        writer.write("ID, Order ID, Product ID, Quantity");
        writer.newLine();
        List<String> lines = customers.parallelStream()
                .map(c -> String.format("%d,%d,%d,%d",
                        c.getId(),
                        (c.getOrderId() != null ? c.getOrderId().getId() : 0),
                        (c.getProductId() != null ? c.getProductId().getId() : 0),
                        c.getQuantity()
                ))
                .toList();
        for (String line : lines) {
            writer.write(line);
            writer.newLine();
        }
        writer.flush();
    }

}
