// Log the project path at the start
var projectPath = api.getProjectPath();
console.log(`Project Path: ${projectPath}`);

// Set the video path
var videoPath = projectPath + "/assets/video.mp4";

// Access the active composition
var comp = api.getActiveComp();

if (comp) {
    // Check if the video path exists
    if (api.filePathExists(videoPath)) {
        // Load the asset with the video path
        let assetID = api.loadAsset(videoPath, false);
        console.log(`Loaded asset for video path: ${videoPath}`);

        // Add asset to composition
        let footageShapeId = api.addAssetToComp(assetID); // <---- Bug only seems to happen when adding asset to comp
        // let footageShapeId = api.primitive("rectangle", "My Rectangle"); // <---- Swap to this to see correct behavior

        console.log(`Footage Shape ID returned: ${footageShapeId}`);

        // Validate the footageShapeId
        if (footageShapeId) {
            // Set the scale, in frame, and out frame for the layer
            api.set(footageShapeId, {"scale.x": 0.5, "scale.y": 0.5});
            api.setOutFrame(footageShapeId, 100);

            // Apply a 50-frame offset
            api.offsetLayerTime(footageShapeId, 50);

            console.log(`Layer type for footage shape ID ${footageShapeId}: ${api.getLayerType(footageShapeId)}`);
        } else {
            console.error(`Invalid footage shape ID: ${footageShapeId}`);
        }
    } else {
        console.error(`Video path does not exist: ${videoPath}.`);
    }
} else {
    console.error("No active composition found.");
}
