import useAsync from './useAsync';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

function useFetch(url, options = {}, dependencies = []) {
  return useAsync(
    () =>
      fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
      }),
    dependencies
  );
}

export { useFetch, useFetch as default };
