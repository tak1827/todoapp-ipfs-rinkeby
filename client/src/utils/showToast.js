const sendToast = (msg, displayLength, wait) => {
	return new Promise(async (resolve, reject) => {
	    window.M.toast({
	      html: '<span onclick="closeTost(this)">'+ msg +'</span>',
	      classes: 'teal accent-4',
	      displayLength,
	    });

	    if (wait) setTimeout(resolve, displayLength)
	    else resolve(true)
  });
}

export default sendToast
