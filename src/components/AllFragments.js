import {useState, useEffect} from 'react';
import EditForm from '../components/EditForm';

const AllFragments = (props) => {

    const [fragment, setFragment] = useState({...props.fragment})

    return (
      <>
         <div>
{/* {fragments.map((fragment) => (
    <div key={fragment.id}> */}
      <ul>
        <li>{fragment.date} </li>
          <li className="bold-movie-all-caps">{fragment.movie}</li>
            <li className="asterisk">{fragment.short}</li>
              <li className="all-caps">{fragment.tv_series}</li>
                <li className="italic">{fragment.book}</li>
                  <li className="quotations">{fragment.play}</li>
                    <li className="quotations-and-italics">{fragment.short_story}</li>
                </ul>
              </div>
      
      </>
    )
  }
 
  export default AllFragments;

  {/* <EditForm 
        handleUpdate={props.handleUpdate} 
        fragmentsData={props.fragment} 
        />
          </div>
        <div>
        <button className="delete-btn" onClick={() => {
                                props.handleDelete(props.fragment)
                              }}>
                                 Delete
                                </button>
                              </div>
        {/* <button
          className="btn btn-danger"
          onClick={() => handleDelete(fragment.id)}
        >
          Delete
        </button> */}
      {/* </div> */}
    {/* </div>
  ))}
</div>  */}