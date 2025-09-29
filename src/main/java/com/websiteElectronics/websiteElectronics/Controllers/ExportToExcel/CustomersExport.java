package com.websiteElectronics.websiteElectronics.Controllers.ExportToExcel;

import com.websiteElectronics.websiteElectronics.Dtos.CustomersDto;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class CustomersExport {

    public static void exportToCsv(List<CustomersDto> customers, OutputStream os) throws IOException {
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, StandardCharsets.UTF_8));
        writer.write("ID,First Name,Last Name,Email,Password,Phone Number,Address,City,State,Zip Code,Country");
        writer.newLine();
        List<String> lines = customers.parallelStream()
                .map(c -> String.format("%d,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s",
                        c.getId(),
                        safe(c.getFirstName()),
                        safe(c.getLastName()),
                        safe(c.getEmail()),
                        safe(c.getPassword()),
                        safe(c.getPhoneNumber()),
                        safe(c.getAddress()),
                        safe(c.getCity()),
                        safe(c.getState()),
                        safe(c.getZipCore()),
                        safe(c.getCountry())
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
