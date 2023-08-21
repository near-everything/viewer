function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

function showAddToHomeScreenInstructions() {
  if (!isMobile()) {
    return;
  }

  if (isIOS()) {
    if (isSafari()) {
      // Show modal with instructions to add to home screen on iOS Safari
    } else {
      // Show modal with instructions to open in Safari
    }
  } else {
    // Show modal with instructions to add to home screen on Android
  }
}

function AddToHomeScreenModal() {
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add to Home Screen</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isIOS() && isSafari() && <p>Instructions for adding to home screen on iOS Safari...</p>}
            {isIOS() && !isSafari() && <p>Please open this site in Safari to add to home screen.</p>}
            {!isIOS() && <p>Instructions for adding to home screen on Android...</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToHomeScreenModal();