import React, { useEffect, useState } from 'react';
import './Viewer.css';

function Viewer({ setPosition, setTarget }) {
  const [apiClient, setApiClient] = useState(null);

  useEffect(() => {
    const iframe = document.getElementById('sketchfab-viewer');
    let intervalId = null;

    if (window.Sketchfab) {
      const client = new window.Sketchfab(iframe);
      client.init('8c979e17364b4a47816ad05f394f30c7', {
        success: (api) => {
          api.start({ preload: 1 });
          api.addEventListener('viewerready', () => {
            console.log('Viewer is ready');
            setApiClient(api);

            // Disable user interaction
            api.setUserInteraction(false, function(err) {
              if (!err) {
                console.log('User interaction disabled');
              } else {
                console.error('Failed to disable user interaction:', err);
              }
            });

            const updateCameraDetails = () => {
              api.getCameraLookAt((err, cameraLookAt) => {
                if (!err) {
                  setPosition({ x: cameraLookAt.position[0], y: cameraLookAt.position[1], z: cameraLookAt.position[2] });
                  setTarget({ x: cameraLookAt.target[0], y: cameraLookAt.target[1], z: cameraLookAt.target[2] });
                }
              });
            };

            updateCameraDetails();
            intervalId = setInterval(updateCameraDetails, 5000);
          });
        },
        error: () => console.error('Sketchfab API failed to initialize'),
        autostart: 1,
        camera: 0,
        ui_animations: 0,
        ui_infos: 0,
        ui_stop: 0,
        ui_inspector: 0,
        ui_watermark_link: 0,
        ui_watermark: 0,
        ui_ar: 0,
        ui_help: 0,
        ui_settings: 0,
        ui_vr: 0,
        ui_fullscreen: 0,
        ui_annotations: 0,
        prevent_user_light_rotation: 1,
      });
    } else {
      console.error('Sketchfab API script not loaded');
    }

    return () => {
      clearInterval(intervalId);
      if (apiClient) {
        apiClient.stop();
        apiClient.setUserInteraction(true, function(err) {
          if (!err) {
            console.log('User interaction enabled');
          } else {
            console.error('Failed to enable user interaction:', err);
          }
        });
      }
    };
  }, [setPosition, setTarget]);

  function handleViewChange(position, target) {
    if (apiClient) {
      apiClient.setCameraLookAt(position, target, (err) => {
        if (err) {
          console.error('Failed to set camera look at:', err);
        } else {
          console.log(`Camera set to ${position}`);
        }
      });
    }
  }

  return (
    <div className="viewer-container">
      <iframe id="sketchfab-viewer"></iframe>
      <div className="overlay-buttons">
        <button style={{ width: '100px', height: '100px', margin: '5px' }} onClick={() => handleViewChange([-9.93, 6.88, 1.96], [-6.29, 2.11, 1.97])}>Outside View</button>
        <button style={{ width: '100px', height: '100px', margin: '5px' }} onClick={() => handleViewChange([-1.47, -1.74, 1.56], [-5.12, 3.01, 1.56])}>Inside View</button>
      </div>
    </div>
  );
}

export default Viewer;
