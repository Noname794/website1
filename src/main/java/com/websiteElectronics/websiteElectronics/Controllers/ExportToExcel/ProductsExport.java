package com.websiteElectronics.websiteElectronics.Controllers.ExportToExcel;

import com.websiteElectronics.websiteElectronics.Dtos.ProductsDto;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class ProductsExport {
    public static void exportToCsv(List<ProductsDto> customers, OutputStream os) throws IOException {
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, StandardCharsets.UTF_8));
        writer.write("ID, Name, Description, Price, Quantity, Image URL, Supplier ID, Category ID");
        writer.newLine();
        List<String> lines = customers.parallelStream()
                .map(c -> String.format("%d,%s,%s,%d,%d,%s,%d,%d",
                        c.getId(),
                        safe(c.getName()),
                        safe(c.getDescription()),
                        c.getPrice(),
                        c.getQuantity(),
                        safe(c.getImageUrl()),
                        ((c.getSupplier() != null) ? c.getSupplier().getId() : 0),
                        ((c.getCategory() != null) ? c.getCategory().getId() : 0)
                ))
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
