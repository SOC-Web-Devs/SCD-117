
const createUser  = async (user) => {
  await axios
      .post('http://localhost:4000/api/agents/agent', user)
      .then(async response => {
        const addedUser = response.data
        console.log(`POST: user is added`, addedUser)
        // append to DOM
        //appendToDOM([addedUser])
        const matrixUser = {
            child_id: addedUser.id,
            parent_id: addedUser.referral_id,
            left_child : null,
            right_child : null
        }
      await createUserMatrix(matrixUser)
      const parentID =  await findParentId(addedUser.referral_id , addedUser.id);
      place_under_placement_id(parentID , addedUser.id);

      })
      .catch(error => console.error(error))  
  }

const place_under_placement_id= async (parentID , agentId)=> {
  await axios.get(`http://localhost:4000/api/agents/getMatrix/${parentID}`)
  .then(async response => {
   const users = await response.data;
   const position = await (users[0].left_child == null? 'left_child': 'right_child' )
   console.log(parentID+"  "+ agentId+" "+position)
   await updateParentId(parentID , agentId , position) 
 })
  .catch(error => console.error(error));
}

const updateParentId = async (parentID, agentId, position) => {
  try {
    const { data } = await axios({
        method: 'put',
        url: `http://localhost:4000/api/agents/update/${agentId}`,
        data: {
            id: parentID,
        }
    });

    console.log(data);
} catch (err) {
    if (err.response.status === 404) {
        console.log('Resource could not be found!');
    } else {
        console.log(err.message);
    }
}

try {
  const { data } = await axios({
      method: 'put',
      url: `http://localhost:4000/api/agents/updatechild/${parentID}`,
      data: {
          id: agentId,
          position: position
      }
  });

  console.log(data);
} catch (err) {
  if (err.response.status === 404) {
      console.log('Resource could not be found!');
  } else {
      console.log(err.message);
  }
}

}



const createUserMatrix  = async (user) => {
  await axios
      .post('http://localhost:4000/api/agents/matrix', user)
      .then(response => {
        const addedUser = response.data
        console.log(`POST: user is added`, addedUser)
        // append to DOM
        //appendToDOM([addedUser])
      })
      .catch(error => console.error(error))  
  }

const findParentId= async(myId , agentId)=>{
  
  var arr = [myId];
  while(arr != null){
     var temp = [];  //temp array
    for(let i = 0 ; i<arr.length ; i++){
      if (await checkPlaceAvailableOrNot(arr[i]) == true) {
        console.log("Rohan Shaikh" +arr[i]);
        return arr[i];
      } // if end 
      else {
        var id = arr[i];
          await axios.get(`http://localhost:4000/api/agents/getMatrix/${id}`)
        .then(async response => {
         const users = await response.data;
        const left_child = users[i].left_child;
        const right_child = users[i].right_child;
         temp.push(left_child,right_child)
         console.log(temp)
       })
        .catch(error => console.error(error));
       
        // console.log("asdsadasd")
        // return false;
      } // else end
    } // for end
    arr = []
    Array.prototype.push.apply(arr,temp)
    console.log("Shfting ARRAY"+arr)
    //return true;
  } // end while
}


const checkPlaceAvailableOrNot= async (agent_id)=> {
 let promise = await axios.get(`http://localhost:4000/api/agents/getMatrix/${agent_id}`)
  .then(async response => {
   const users = await response.data;
   //console.log(`GET users`, users[0].child_id);
   if(users[0].left_child == null || users[0].right_child == null){
    console.log("Rohan")
    return true;
   }//end if
   else{
    console.log("Shaikh")
    return false;
   }//end else
   
 })
  .catch(error => console.error(error));
  return await promise;
}

