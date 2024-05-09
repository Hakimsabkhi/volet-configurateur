import React, { useEffect, useState } from 'react';
import './Viewer.css';
import logo from '../../assets/logo.svg';

function Viewer({ setPosition, setTarget }) {
  const [apiClient, setApiClient] = useState(null);
  const [userInteractionEnabled, setUserInteractionEnabled] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);  // State to control the blur effect
  const [progress, setProgress] = useState(0);  // State to control the progress bar
  const [nodes, setNodes] = useState([]);  // State to store the nodes
  
  useEffect(() => {
    const iframe = document.getElementById('sketchfab-viewer');
    let intervalId = null;

    if (window.Sketchfab) {
      const client = new window.Sketchfab(iframe);
      client.init('0a3614b2e92f4b3f8e8f2945dbfac1da', {
        success: (api) => {
          api.start({ preload: 1 });
          api.addEventListener('viewerready', () => {
            console.log('Viewer is ready');
            setApiClient(api);

            // Set initial user interaction status
            api.setUserInteraction(userInteractionEnabled, function(err) {
              if (!err) {
                console.log(`Initial user interaction set to ${userInteractionEnabled}`);
              } else {
                console.error('Failed to set user interaction:', err);
              }
            });

            // Regular camera updates
            const updateCameraDetails = () => {
              api.getCameraLookAt((err, cameraLookAt) => {
                if (!err) {
                  setPosition({
                    x: cameraLookAt.position[0], 
                    y: cameraLookAt.position[1], 
                    z: cameraLookAt.position[2]
                  });
                  setTarget({
                    x: cameraLookAt.target[0], 
                    y: cameraLookAt.target[1], 
                    z: cameraLookAt.target[2]
                  });
                }
              });
            };

            updateCameraDetails();
            intervalId = setInterval(updateCameraDetails, 5000);
            getNodeMap(api);
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
        ui_controls: 0,
        ui_fadeout :0,
        ui_general_controls :0,
      });
    } else {
      console.error('Sketchfab API script not loaded');
    }

    // Cleanup function for useEffect
    return () => {
      clearInterval(intervalId);
      if (apiClient) {
        apiClient.stop();
      }
    };
  }, [setPosition, setTarget]);

  function getNodeMap(api) {
    api.getNodeMap((err, nodes) => {
      if (!err) {
        console.log('Node map retrieved:', nodes);
        setNodes(nodes);
      } else {
        console.error('Failed to get node map:', err);
      }
    });
  }

  // Manage blur timeout
  useEffect(() => {
    const blurTimeout = setTimeout(() => {
      setIsBlurred(false);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 100 : prevProgress + 5));
    }, 500);

    return () => {
      clearTimeout(blurTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  function toggleUserInteraction() {
    if (apiClient) {
      const newState = !userInteractionEnabled;
      apiClient.setUserInteraction(newState, function(err) {
        if (!err) {
          console.log(`User interaction toggled to ${newState}`);
          setUserInteractionEnabled(newState);
        } else {
          console.error('Failed to toggle user interaction:', err);
        }
      });
    }
  }

  function handleViewChange(position, target) {
    if (apiClient) {
      apiClient.setCameraLookAt(position, target, (err) => {
        if (err) {
          console.error('Failed to set camera look at:', err);
        } else {
          console.log(`Camera set to position ${position}`);
        }
      });
    }
  }

  return (
    <div className="viewer-container">
      <iframe id="sketchfab-viewer" className={isBlurred ? 'blurred' : ''}></iframe>
      {isBlurred && (
        <div className="loading-Viewer">
          <img src={logo} alt="Loading..." />
          <div className="progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      <div className="overlay-buttons">
        <button className='InteractionButton' onClick={() => handleViewChange([-10.7206, 7.83963, 1.6895], [-4.6246, -0.74928, 1.57804])}>Outside View</button>
        <button className='InteractionButton' onClick={() => handleViewChange([-0.20124, -3.4002, 1.5615], [-5.12, 3.01, 1.56])}>Inside View</button>
        <button className='InteractionButton' onClick={toggleUserInteraction}>{userInteractionEnabled ? 'Disable Interaction' : 'Enable Interaction'}</button>
      </div>
    </div>
  );
  
}

export default Viewer;
