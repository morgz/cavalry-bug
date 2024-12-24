# cavalry-bug

This project demonstrates a bug in `script-to-run.js` where adding a video asset to a composition does not behave as expected. The expected behavior is that the footage shape should behave like other shapes, such as a rectangle, and work correctly with `setOutFrame` and `offsetLayerTime` functions.

## Steps to Reproduce

1. Ensure the video file exists at the path: `assets/video.mp4`.
2. Run the script in the Calvary Javascript Editor `script-to-run.js`.
3. Observe the behavior when the asset is added to the composition using `api.addAssetToComp(assetID)`.

## Expected Behavior

- The footage shape should be added to the composition.
- The `setOutFrame` function should set the out frame to 100.
- The `offsetLayerTime` function should apply a 50-frame offset.

## Observed Behavior

- The footage shape does not behave as expected when added to the composition.
- The bug seems to occur specifically when using `api.addAssetToComp(assetID)`.
- Swapping to a primitive shape like a rectangle (`api.primitive("rectangle", "My Rectangle")`) results in the correct behavior.

## Additional Notes

- Ensure that the active composition is available before running the script.
- Check the console for any error messages related to invalid footage shape IDs or missing video paths.

Sample footage from Vecteezy.com