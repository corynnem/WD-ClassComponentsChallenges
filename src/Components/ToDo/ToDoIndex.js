import React, { Component } from 'react';
import Checkbox from 'react-three-state-checkbox';





class ToDoIndex extends Component {
    constructor(){
        super()
        this.state = {
            currentToDo: '',
            toDoArray: [{
                listItem: '',
            }],
            
        }
        
    }

    onSubmit(e){
        e.preventDefault()
        let newTodoObj = {
           listItem: this.state.currentToDo,
        }
        this.setState({
            currentToDo: '',
            toDoArray: [...this.state.toDoArray, newTodoObj]
        })
    }

    onChange(toDo){
        let addTodo = toDo.target.value; 
         return this.setState({currentToDo: addTodo})
    }

    checkboxChange(e){
        let todoItem = e.target.className
        let copyTodoArray = this.state.toDoArray
        let deleteTodo = []
       
        copyTodoArray.forEach((obj) => {
            if(obj.listItem.includes(todoItem)){
               console.log(obj)
            } else {
               
                deleteTodo.push(obj)
            }
        })
        
        return this.setState({toDoArray: deleteTodo})
    }



    render(){

            const flexStyles = {
                display: 'flex',
                width: '1w',
                alignItems: 'left'
            }
            
        return(
            <div>

                <form type='submit' onSubmit={(e) => this.onSubmit(e)}>
                <h1>ToDo List</h1>
                <input onChange={(e) => this.onChange(e)}/>
                <br></br>
                <br></br>
                <button>Submit toDo</button>
                </form>

                <br></br>
                <br></br>
    <div>
      { this.state.toDoArray.map((toDo) => {
      return  toDo.listItem === '' ?  '' :  
      <div  id='checkbox' style={{width: '30vw'}}> 
                    <Checkbox className={toDo.listItem} onChange={(e) => this.checkboxChange(e)} style={flexStyles}/>
                    <p  className={toDo.listItem} style={flexStyles, {marginTop: '-2vh', marginLeft: '2vw'}}>{toDo.listItem}</p>
                  </div>
            })
        }
       </div>
     </div>
 
        )
    }
}

export default ToDoIndex;