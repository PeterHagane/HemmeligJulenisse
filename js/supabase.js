const apiKey = `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bWRndXlweXpneWF1a3JhY2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjU1NjYsImV4cCI6MjAxNTc0MTU2Nn0.miszgWUzL9goWkzqZ1ai1W4sIKxITGTvLdLobrwA1dM`

const apiUrl = `https://kvmdguypyzgyaukracal.supabase.co`

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

const supabase = 'https://kvmdguypyzgyaukracal.supabase.co';
var usersState = { data, error };



async function saveUser(name, password){
    fetch(supabase + '/', 
    {
        headers: {
            apikey: apiKey,
            // mode: "no-cors",
            
        }
        
    }
    ).then(function (response) {
        if(response){
            
        }

        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        usersState.data = data;
        console.log(data);
    }).catch(function (error) {
        console.warn(error);
    }).finally(function () {
        console.log()
    });

    console.log(req)

    // const { data, error } = await api.from("profiles").insert({
    //     id: 1,
    //     username: "name",
    // }).select()

    // console.log(error, data)

    // const { data, error } = await api.from('test').select()

    // if(error){

    // }

    // console.log(error, data)

}