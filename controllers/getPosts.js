export default async function getPosts1(){
    const url = process.env.API_URL
    try{
        const response = await fetch(`${url}/api/posts`,
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