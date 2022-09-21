// Days till bday
//  Math.round(Math.abs((today - bday) / oneDay));

function btn() {
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const bday = new Date(2022, 11, 15);
  const difference = Math.round(Math.abs((today - bday) / oneDay));
  console.log(`Days Until Birthday ${difference}`);
  alert(difference);
}
