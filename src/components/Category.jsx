import React, { Component } from 'react'

export class Category extends Component {
    load =()=>{
        let a = document.getElementById('country');
        let value1 = a.value;
        let b = document.getElementById('category');
        let value2 = b.value;
        this.props.selectCategory(value1,value2);
        }
  render() {
    return (
        <div className='category-container'>
        <label>Country
           <select name="country" id="country">
               <option value="in">India</option>
               <option value="us">United States</option>
               <option value="jp">Japan</option>
               <option value="kr">Korea</option>
               <option value="ca">Canada</option>
           </select>
           </label>
           <label>Category
           <select name="country" id="category">
               <option value="general">General</option>
               <option value="business">Business </option>
               <option value="health">Health</option>
               <option value="science">Science</option>
               <option value="sports">Sports</option>
           </select>
        </label>
  
  
        <button className='btn btn-success btn-sm' onClick={this.load}>Search</button>
       
     </div>
    )
  }
}

export default Category;

