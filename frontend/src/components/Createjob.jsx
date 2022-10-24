import React from 'react'
import './createjob.css'

const Createjob = () => {
  const selectedTags = tags => {
		console.log(tags);
	};
	return (
		<div className="App">
			<TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
		</div>
	);
};
  const TagsInput = props => {
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      };
  } 
  return (
    <div className='card'>
        <div className='box'>
          <form className='entry-form'>
            <div className='title'>
              <h1>Job Title</h1>
              <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-password" type="text" />
             
            </div>
            <div className='des'>
              <h1>Job Description</h1>
              <textarea class="block p-2.5 w-full text-sm text-gray-900 h-36 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-password" type="text" />
              {/* <input
                class= 'job'
                type='textarea'
                placeholder='Job Description'
              />   */}
            </div>
            <div className='skills'>
              <h1>Required Skills</h1>
              <textarea onKeyUp={event => event.key === "Enter" ? addTags(event) : null} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-password" type="text" placeholder="Required Skills" />
                            
              <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className='tag-title'>{tag}</span>
                <span className='tag-close-icon'
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
			</ul>
            
              
            </div>
          <div className="flex space-between m-auto gap-2 px-4">
          <button className='bg-green-600 w-[200px] rounded-full font-medium my-6  py-3 text-black'>Submit Post</button>
          <button className='bg-red-600 w-[200px] rounded-full font-medium my-6  py-3 text-black'>Cancel</button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Createjob