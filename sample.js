<div>{data.text}</div>
<div>
  {
    data.replies.map((replies, key) =>
      <>
        <div key={key}>
          {replies.author.name}
        </div>
        <img src={replies.author.avatar} alt="img" width={40} height={40}></img>
      </>
    )
  }
</div>


{/* <div>
                            {
                                data.replies.map((replies, key) =>
                                    <>
                                        <div className="flex" key={key}>
                                            <img src={replies.author.avatar} alt="img" width={40} height={40}></img>
                                            <div>
                                                {replies.author.name}
                                            </div>
                                            <div>
                                                {replies.text}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            
                        </div> */}