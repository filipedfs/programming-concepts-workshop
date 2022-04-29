import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;


fun main() {
    val baseUrl = "https://filipefonseca.com/api/workshop";

        val client = HttpClient.newHttpClient();

        val request = HttpRequest.newBuilder(
                URI.create(baseUrl))
                // .header("accept", "application/json")
                .build();

        val response = client.send(request, BodyHandlers.ofString());

        val statusCode = response.statusCode();
        val json = response.body();

        println(statusCode);

        println(json);
}
