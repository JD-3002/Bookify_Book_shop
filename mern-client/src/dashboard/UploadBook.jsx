import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
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

        const handlebookSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const bookTitle = form.bookTitle.value;
            const authorName = form.authorName.value;
            const imageURL = form.imageURL.value;
            const bookDescription = form.bookDescription.value;
            const category = form.categoryName.value;
            const bookPDFURL = form.bookPdfUrl.value;

            const bookObj ={
                bookTitle,authorName,imageURL,bookDescription,category,bookPDFURL
            }
            console.log(bookObj)

            //send data to db
            fetch("http://localhost:5000/upload-book", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookObj)
               
            }).then(res=>res.json()).then(data=>{
                alert("BOOK UPLOADED SUCCESSFULLY !!")
                form.reset()
            })

        }
  return (
    <div className='=px-4 my-12'>

        <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2>

        <form onSubmit={handlebookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle"  placeholder="Book name" required type="text" />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName"  placeholder="Author Name" required type="text" />
      </div>
      </div>

      {/* 2ndrow */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL"  placeholder="Book Image URL" required type="text" />
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
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your Book Description over here!" className='w-full'required rows={4} />
        
      </div>
      <div>
        
      </div>

      {/* {book pdf link} */}
     
      <div >
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" name="bookPdfUrl"  placeholder="Paste down the Book PDF URL" required type="text" />
      </div>
     
     <div>
     <Button type='submit' className='mt-5'>Upload Book</Button>
     </div>

    </form>
    </div>
  )
}

export default UploadBook