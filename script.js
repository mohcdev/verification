const btn = document.querySelector('button')
	const srcTextbox = document.querySelector('#src')
	const resultTextbox = document.querySelector('#result')


resultTextbox.onfocus = (e)=> console.log(e.target.select())
btn.onclick = ()=>{
		//console.log(srcTextbox.value.split('\n'))

	let data = srcTextbox.value.split('\n')
	data.forEach(row =>{
	if(row.length>20){
	// 			 console.log(row)

		//	 console.log(row.substring(11, row.indexOf('"',12)), row.substring(17,row.indexOf('"',20)))
		 let profileNbr = row.substring(11, row.indexOf('"',12))
		 let emailAddress = row.substring(row.indexOf('","')+3,row.indexOf('"',20))

		 let line =`${profileNbr} \t ${emailAddress} \n`  

			
		resultTextbox.value += line

			}
			 
		})
	}
	 