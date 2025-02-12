 const createElement = (itemType, itemClass, itemId = null, itemTxt = null) => {
  const ele = document.createElement(itemType);
  ele.className = itemClass;
  ele.id = itemId;
  ele.textContent = itemTxt;
  return ele;
}

export default createElement;