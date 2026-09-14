function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  console.log(currentYear);

  return (
    <footer>
      <p> Copyright©{currentYear}</p>
    </footer>
  );
}
export default Footer;
