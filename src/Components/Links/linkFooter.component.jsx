function LinkFooter({ linkfooter}){
    // Receives Link data (id, title, linkUrl, ImageUrl)
    return(
        
        <div key={linkfooter.id} >
            <a href={linkfooter.linkUrl} target={"_blank"}>
                <img src={linkfooter.imageUrl} alt="Icon" />
            </a>
        </div>
    )
}

export default LinkFooter;