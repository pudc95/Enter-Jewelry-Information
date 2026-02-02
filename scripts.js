// 添加标签输入框
function addTagInput() {
  // 创建新的标签输入框容器
  const tagContainer = document.createElement('div');
  tagContainer.classList.add('tag-input-container');
  
  // 创建新的标签输入框
  const inputTag = document.createElement('input');
  inputTag.type = 'text';
  inputTag.name = 'tag[]';
  inputTag.classList.add('tag-input');
  inputTag.placeholder = 'Enter tag';
  
  // 创建删除按钮
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.classList.add('remove-tag-btn');
  removeButton.textContent = 'Delete';
  removeButton.onclick = function () {
    removeTagInput(removeButton);
  };
  
  // 将输入框和删除按钮添加到容器中
  tagContainer.appendChild(inputTag);
  tagContainer.appendChild(removeButton);
  
  // 将新的容器添加到标签容器中
  document.getElementById('tags-container').appendChild(tagContainer);
}

// 删除标签输入框
function removeTagInput(button) {
  const tagInputContainer = button.parentElement;
  tagInputContainer.remove();
}
