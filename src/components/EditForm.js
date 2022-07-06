import {useState} from 'react'
import EditForm from '../components/EditForm';
import Modal from '../components/Modal';

const Edit = (props) => {


  const [fragment, setFragment] = useState({...props.fragment})

   // add modal
   const [show, setShow] = useState(false)
  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setFragment({...fragment, [event.target.name]: event.target.value})
  }

  //submit for adding a new book
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(fragment)
  }

  return(
    <>
        <div className="asset-button-container">
            <button 
            className="asset-button" 
            onClick={() => setShow(true)}
            >
            Edit
            </button>
                </div>
                    <Modal 
                    title="Edit" 
                    onClose={() =>setShow(false)} 
                    show={show}
                    > 
                    <form 
                    className="add-input" 
                    onSubmit={handleSubmit}
                    >
                    <label 
                    htmlFor='date'
                    >
                    Date: 
                    </label>
                <input 
                type='text' 
                name='date' 
                defaultValue={fragment.date} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='movie'
                >
                    Movie: 
                    </label>
                <input 
                type='text' 
                name='movie' 
                defaultValue={fragment.movie} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='short'>
                    Short: 
                    </label>
                <input 
                type='text' 
                name='publisher' 
                defaultValue={fragment.short} 
                onChange={handleChange}/>
                <br/>
                <br/>

                <label 
                htmlFor='tv_series'>
                    TV series: 
                    </label>
                <input 
                type='text' 
                name='tv_series' 
                value={fragment.tv_series} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='book'
                >
                    Book: 
                    </label>
                <input 
                type='text' 
                name='book' 
                defaultValue={fragment.book} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='play'
                >
                    Play: 
                    </label>
                <input 
                type='text' 
                name='play' 
                defaultValue={fragment.play} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='short_story'
                >
                    Short story: 
                    </label>
                <input 
                type='text' 
                name='short_story' 
                defaultValue={fragment.short_story} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <div className='add-submit-btn-div'>
                  <input type='submit'/>
                </div>
              </form>
              </Modal>
    </>
  )
}

export default Edit