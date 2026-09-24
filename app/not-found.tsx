export default function NotFound(){
  return <main className="notFoundPage">
    <div className="notFoundCard">
      <img src="/advanced-fifth-axis-logo.webp" alt="Advanced Fifth Axis"/>
      <span>404</span>
      <h1>Page not found · الصفحة غير موجودة</h1>
      <p>The page may have moved or the address may be incorrect.<br/>قد تكون الصفحة نُقلت أو أن الرابط غير صحيح.</p>
      <div><a className="primaryButton" href="/">English home</a><a className="outlineButton" href="/ar">الرئيسية العربية</a></div>
    </div>
  </main>;
}