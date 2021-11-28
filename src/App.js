import {useState} from 'react'
import Title from './c/Title'
import UploadForm from './c/UploadForm'
import ImageGrid from './c/ImageGrid'
import Modal from './c/Modal'

function App() {

	const [selectedImg, setSelectedImg] = useState(null)

	return (
		<div className="App">
      		<Title/>
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />}
    	</div>
	);
}

export default App;
