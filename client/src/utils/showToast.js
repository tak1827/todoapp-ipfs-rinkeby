const showToast = (msg, displayLength, state, wait, dismiss) => {
	return new Promise(async (resolve, reject) => {
			const classes = state === 'success' 
				? 'teal accent-4' 
				: state === 'fail' 
					? 'red accent-4'
					: 'light-blue accent-4'
	    const toastInstance = window.M.toast({
	      html: '<span onclick="closeTost(this)">'+ msg +'</span>',
	      classes,
	      displayLength,
	    });

	    if (wait) setTimeout(resolve, displayLength)
	    if (dismiss) resolve(toastInstance)
	    
	    resolve(true)
  });
}

export default showToast
