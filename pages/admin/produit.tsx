import { useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [state, setState] = useState<{ file?: FileList }>({});
  const addProd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('image', state.file[0]);
    await axios.post('/api/product', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  return (
    <>
      <form onSubmit={addProd}>
        <input
          onChange={(e) =>
            setState({
              file: e.target.files,
            })
          }
          type="file"
        />
        <button>ajouter</button>
      </form>
    </>
  );
};

export default Product;
