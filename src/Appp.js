import React,{useState, useEffect} from 'react';
//import {Icon} from 'react-icons-kit'
//import {trash} from 'react-icons-kit/feather/trash'
//Icon icon={trash} /*/*

const getDataFromLs =() =>{
  const data = localStorage.getItem('books');
if(data){
  return JSON.parse(data)
}else{
  return[];
}

}

function Appp() {
  const[books, setBooks] = useState(getDataFromLs());
const[title, setTitle] = useState("");
const[author, setAuthor] = useState("");
const[number, setNumber] = useState("");


const handleSubmit= (e) => {
  e.preventDefault();
  let book ={
    title,
    author,
    number
  }

setBooks([...books,book])
}

useEffect(()=>{
localStorage.setItem('books', JSON.stringify(books))
}, [books])

  return (
    <div className="wrapper">
    <h2>list kthbha</h2>
    <p>ktab jaded khodra beh ktabkhaneh ezafeh konid</p>
    <div className="main">
    <div className="form-container">
    <form autoComplete="off" onSubmit={handleSubmit}>
    <div className="form-group mt-4">
    <label htmlFor="">onvan</label>
    <input type="text" className="form-control" 
required
onChange={(e)=> setTitle(e.target.value)}

 />
    </div>
    <div className="form-group mt-4">
    <label htmlFor="">nevesandeh</label>
    <input type="text" className="form-control" required
    onChange={(e)=> setAuthor(e.target.value)} />
    </div>
    <div className="form-group mt-4">
    <label htmlFor="">shomareh</label>
    <input type="text" className="form-control" required 
    onChange={(e)=> setNumber(e.target.value)} />
    </div>
    <div className="form-group mt-4">
    <button type="submit" className="btn btn-success btn btn-md">afzoodan</button>
    </div>
    </form>
    </div>
    <div className="view-container">
{
  books.length > 0 &&
  <>
      <div className="table-responsive w-100">
    <table className="table">
    <thead>
    <th>shomarandeh</th>
    <th>onvan</th>
    <th>nevesandeh</th>
    <th>hazf</th>
    </thead>
    <tbody>
    <tr>
    <td>01</td>
    <td>test</td>
    <td>arsam</td>
    <td className='delete-btn'>
    </td>
    </tr>
    </tbody>
    </table>
</div>
<button className="btn btn-danger btn-md">hazfe hameh</button>
  </>
}
{
books.lenght < 1 && <div>mojoodnist</div>

}
    </div>
    </div>
    </div>
  );
}

export default Appp;