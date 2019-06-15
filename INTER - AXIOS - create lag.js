/*

!! INTER - AXIOS - CREATE LAG !!

> creates lag of 3 seconds

*/

axios.post('api/route-post-kml', data)
		.then((response) => {
			setTimeout(() => {
			  if(response.status == 200) {
					swal({
						type: 'success',
						title: 'GPS data uploaded',
						showConfirmButton: false,
						timer: 1800
					}).catch(swal.noop)
				}
			}, 3000)
		})