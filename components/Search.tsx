import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

const Search = () => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger>
        <FaSearch className=" outline-none ring-0" size={12}  />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-white ">{t('search')}</DialogTitle>
        <div className="bg-white  rounded  border">
          <div className="flex justify-between items-center">
            <input
              type="text"
              name="search"
              id=""
              placeholder={t('search')}
              className="bg-transparent outline-none p-2 text-lg   ring-0"
            />
            <div className="bg-primary p-3 rounded text-white   text-center">
              <FaSearch size={18} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
