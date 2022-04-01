import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;

class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        String baseUrl = "http://localhost:3000/api/workshop";

        var client = HttpClient.newHttpClient();

        var request = HttpRequest.newBuilder(
                URI.create(baseUrl))
                .header("accept", "application/json")
                .build();

        var response = client.send(request, BodyHandlers.ofString());

        var statusCode = response.statusCode();
        var json = response.body();

        System.out.println(statusCode);

        System.out.println(json);

    }
}
