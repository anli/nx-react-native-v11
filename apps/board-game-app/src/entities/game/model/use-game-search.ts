import { XMLParser } from "fast-xml-parser";
import { useEffect, useState } from "react";

const baseUrl = 'https://boardgamegeek.com/xmlapi2';

export const useGameSearch = (text: string) => {
  const url = `${baseUrl}/search?type=boardgame&query=${text.replaceAll(" ", "+")}`;
  const [data, setData] = useState<
    | undefined
    | {
      id?: string;
      name?: string;
    }[]
  >(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const parser = new XMLParser({
          ignoreAttributes: false,
        });
        const xmlData = parser.parse(data);
        return xmlData.items?.item?.map(_item => ({
          id: _item?.['@_id'],
          name: _item?.name?.['@_value']
        }))
      })
      .then((_data) => {
        setData(_data);
      });
  }, [url]);

  return {
    data,
  };
};
