import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
    const {id} = useParams();
    const {bookTitle, authorName , imageURL, bookDescription, category, bookPDFURL} = useLoaderData();
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Science Fiction",
        "Fantasy",
        "Biography",
        "History",
        "Romance",
        "Thriller",
        "Self-Help",
        "Travel",
        "Health & Fitness",
        "Business & Economics",
        "Education",
        "Children's Books",
        "Graphic Novels",
        "Poetry",
        "Religion & Spirituality",
        "Cookbooks",
        "Art & Photography"
      ];

        const[selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

        const handleChangeSelectedValue = (event) => {
            console.log(event.target.value);
            setSelectedBookCategory(event.target.value);
        }

        const handleUpdate = (event) => {
            event.preventDefault();
            const form = event.target;
            const bookTitle = form.bookTitle.value;
            const authorName = form.authorName.value;
            const imageURL = form.imageURL.value;
            const bookDescription = form.bookDescription.value;
            const category = form.categoryName.value;
            const bookPDFURL = form.bookPdfUrl.value;

            const updateBookObj ={
                bookTitle,authorName,imageURL,bookDescription,category,bookPDFURL
            }
            // console.log(bookObj)

            //update book data
           fetch(`http://localhost:5000/book/${id}`,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBookObj)
           }).then(res=>res.json()).then(data=>{
            alert("BOOK UPDATED SUCCESSFULLY !!")
            
        })

        }
  return (
    <div className='=px-4 my-12'>

        <h2 className='mb-8 text-3xl font-bold'>Update Book</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle"  placeholder="Book name" required type="text" defaultValue={bookTitle}/>
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName"  placeholder="Author Name" required type="text" defaultValue={authorName} />
      </div>
      </div>

      {/* 2ndrow */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL"  placeholder="Book Image URL" required type="text" defaultValue={imageURL}/>
      </div>

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue} >
            {
                bookCategories.map((option) => 
                    <option key={option} value={option}>
                        {option}
                    </option>
                )
            }
        </select>
        
      </div>
      </div>

      {/* {descriptions} */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your Book Description over here!" className='w-full'required rows={4} defaultValue={bookDescription}/>
        
      </div>
      <div>
        
      </div>

      {/* {book pdf link} */}
     
      <div >
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" name="bookPdfUrl"  placeholder="Paste down the Book PDF URL" required type="text" defaultValue={bookPDFURL}/>
      </div>
     
     <div>
     <Button type='submit' className='mt-5'>Update the Book Data</Button>
     </div>

    </form>
    </div>
  )
}

export default EditBooks