import { ref } from 'vue';

export const currentTheme = ref('light');

export const initTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
};

export function switchTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
}
