const btn = document.querySelector('button')
const srcTextbox = document.querySelector('#src')
const resultTextbox = document.querySelector('#result')
const spanSrcCount = document.querySelector('#src + span')
const spanResultCount = document.querySelector('#result + span')
const refreshDiv = document.querySelector('#refresh')

resultTextbox.onfocus = (e)=> console.log(e.target.select())

//empty textboxes first

btn.onclick = ()=>{
		 
	resultTextbox.value = ''

	let data = srcTextbox.value.split('\n')
	data.forEach(row =>{
		if(row.length>40){ 

			let profileNbr = row.substring(11, row.indexOf('"',12))
			let emailAddress = row.substring(row.indexOf('","')+3,row.indexOf('"',20))

			let line =`${profileNbr} \t ${emailAddress} \n`  


			resultTextbox.value += line

		}
			 
	})
	console.log(data.length)
	spanSrcCount.textContent = data.length
	spanResultCount.textContent = resultTextbox.value.split('\n').length
	}
	 

	refreshDiv.onclick = ()=>{
			window.location.reload()
	}