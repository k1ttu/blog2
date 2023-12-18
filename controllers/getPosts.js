export default async function getPosts1(){
    try{
        const response = await fetch("http://localhost:3000/api/posts",
        {
            cache:'no-store'
        }
        );
        const post = await response.json();
        return post.data;
    }
    catch(err){
        console.log(err);
    }
}