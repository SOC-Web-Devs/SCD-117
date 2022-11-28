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
      await findParentId(addedUser.referral_id , addedUser.id);
      })
      .catch(error => console.error(error))  
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
  
  const arr = [myId];
  while(arr != null){
    for(let i = 0 ; i<arr.length ; i++){
      if (await checkPlaceAvailableOrNot(arr[i]) == true) {
        console.log("Rohan Shaikh");
        return arr[i];
      } // if end 
      else {
        console.log("asdsadasd")
        return false;
      } // else end
    } // for end
  } // end while
}


const checkPlaceAvailableOrNot= async (agent_id)=> {
 let promise = await axios.get(`http://localhost:4000/api/agents/getMatrix/${agent_id}`)
  .then(async response => {
   const users = await response.data;
   console.log(`GET users`, users[0].child_id);
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
  return promise;
}

