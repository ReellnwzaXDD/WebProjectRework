

export default function Main(){
    
    return(
        <html lang="en" data-theme="emerald">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O'clock</title>
        <link rel="icon" type="image/x-icon" href="./img/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style-dropbar.css" />
        <script src="../js/app.js"></script>
      </head>
      <body>
        
        
        {/* Banner */}
        <div className="Banner">
          <video src="/vdo/BannerVideo.mp4" className="VdoBanner" autoPlay muted loop playsInline data-object-fit="cover" />
        </div>

        {/* Recommand */}
        <div className="Recommand">
          <div className="Rec-image">
            <img src="/img/Customyourown-neww.png" className="cyo" title="cyo" alt="Custom Your Own" />
          </div>
          <div className="Rec-paragraph">
            <h1 className="Rec-paragraph-Headers">News</h1>
            <p className="Rec-paragraph-Paragraph">
              สร้างสไตล์ของคุณเอง! เลือกผ้าที่คุณชื่นชอบ ทำให้เสื้อของคุณไม่เหมือนใคร! เริ่มต้นที่ O'Clock และเป็นส่วนหนึ่งของการสร้างสรรค์แฟชั่นของคุณได้เลย!
            </p>
            
          </div>
        </div>

        {/* Detail */}
        <div className="Detail-area">
          <div className="Detail-grid">
            <div className="Copyright">
              <h4 className="Copyright-detail" style={{ color: 'white' }}>Copyright © 2023 O'Clock. All Rights Reserved.</h4>
            </div>
          </div>
        </div>
        
      </body>
    </html>
    
  )
    
}