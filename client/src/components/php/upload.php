<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['imageData'])) {
    // Retrieve the image data from the POST request
    $imageData = $_POST['imageData'];

    // Remove the data:image/png;base64, prefix from the base64 data
    $imageData = str_replace('data:image/png;base64,', '', $imageData);

    // Decode the base64 image data
    $decodedData = base64_decode($imageData);

    // Generate a unique filename
    $filename = time() . '.png';

    // Specify the file path to save the image on the server
    $filepath = '../img/custom/' . $filename;

    // Save the image as PNG to the server
    if (file_put_contents($filepath, $decodedData)) {
        // Image saved successfully
        echo json_encode(['filePath' => $filepath]);
    } else {
        echo json_encode(['error' => 'Error saving image to the server.']);
    }
} else {
    echo json_encode(['error' => 'Invalid request or no image data received.']);
}
?>
