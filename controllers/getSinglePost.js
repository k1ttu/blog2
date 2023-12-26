export default async function getSinglePost1(id){
    try{
        const response= await fetch(`http://localhost:3000/api/posts/${id}`, {
            cache:'no-store'
        })
        const post = await response.json();
        return post.data;
    }
    catch(err){
        console.log(err);
    }

}