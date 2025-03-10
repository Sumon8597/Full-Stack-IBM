let API_KEY="AIzaSyCLiyfDcs04UenMkDE5rxbeHYEf29LEeB0";

// let row1=document.getElementById("row1");

let search_term =document.getElementById("search_input").value || "india gate"
async function getData(){
    try{
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)

        let res=await data.json();
        showData(res.items);
        console.log(res.items);

    }catch(e){
        console.log(e);
    }

}
getData();



async function showData(arr){
    // document.getElementById("loading").style.display="none"
    arr.forEach(({snippet, id}) => {
        let box = document.createElement("div");
        box.className="video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;

        box.append(img, title, channel_title);

        video_section.append(box)

        box.onclick=()=>{
            let obj ={
                snippet, id
            }

            localStorage.setItem("videoData", JSON.stringify(obj));

            window.location.href = "video.html"
        }
    });
}


// async function showData(arr) {
//     arr.foreach(({snippet})=>{
//         let box = document.createElement("div");
//         box.className="row1";

//         let img =document.createElement("img");
//         img.src=snippet.thumbnails.medium.url;
//         let channel_title=document.c
//     })
// }