import { XMLParser } from "fast-xml-parser";
import { useEffect, useState } from "react";

const baseUrl = 'https://boardgamegeek.com/xmlapi2/';

export const useGetGame = (id: string = '169786') => {
  const url = `${baseUrl}/thing?type=boardgame&id=${id}`;
  const [data, setData] = useState<
    | undefined
    | {
      id?: string;
      name?: string;
      image?: string;
      thumbnail?: string;
    }
  >(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const parser = new XMLParser({
          ignoreAttributes: false,
        });
        const xmlData = parser.parse(data);
        return {
          id: xmlData.items.item?.['@_id'],
          name: xmlData.items.item?.['name']?.[0]?.['@_value'],
          image: xmlData.items.item?.['image'],
          thumbnail: xmlData.items.item?.['thumbnail'],
        };
      })
      .then((_data) => {
        setData(_data);
      });
  }, [url]);

  return {
    data,
  };
};
