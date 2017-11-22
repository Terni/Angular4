# Angular4
## Zadání: Vytvořte aplikaci pro tvorbu online menu pokrmů pro restaurace.

- [ ] Na hlavní stránce se vypíšou všechny restaurace s platným menu a náhledem menu pro daný den
- [ ] a uživatel také bude mít možnost změnit "datum" aby se podíval hromadně na menu pro daný den ve všech restauracích.

- [ ] Po kliknutí na konkrétní restauraci se ukáže celé menu na celý týden s možností přecházet na další týdny.

- [x] Aplikace také bude obsahovat primitivní administraci (statické přihlašovací údaje admin/admin)
- [ ] ve které bude možno přidat/upravit/smazat menu k dané restauraci. Výběr restaurace bude ze statického seznamu a restaurace nepůjdou nijak měnit.

>Pro statické data použijte ideálně JSON soubory (například prvotní načtení meníček, seznam restaurací...), pro data vytvořené nově použijte Local Storage. 

>Ideálně by datová flow měla být, že pokud uživatel nemá data v Local Storage, načtou se ukázková data z JSONu do Local Storage a následně všechny operace (create, delete, update) probíhají již nad daty v Local Storage.

>Použijte TypeScript, Angular4. Pokud uznáte za vhodné tak použijte další knihovny, nástroje (Webpack, Gulp, Material...atp).

>Testy nejsou potřeba a na UI nezáleží, stačí nějaká bootstrap šablona.

>Ideálně kód odevzdat přes Github nebo Git repozitář, ale ZIP v mailu je možno použít také.

# TODO:
## API
[ ] GET> Model pro Restaurace (Prio 1)
```
{ 
  "Restaurant": [
    {
      "Name": "Pour Zlin",
      "Locale": "Zlín",
      "Body": [
        {
          "Date": "22.11.2017",
          "MenuList": [
            {
              "Menu": "Text menu22.",
              "Cena": 122
            },
            {
              "Menu": "Text menu.",
              "Cena": 95
            },
            {
              "Menu": "Text menu.",
              "Cena": 110
            }
          ]
        },
        {
          "Date": "23.11.2017",
          "MenuList": [
            {
              "Menu": "Text menu23.",
              "Cena": 122
            },
            {
              "Menu": "Text menu.",
              "Cena": 95
            },
            {
              "Menu": "Text menu.",
              "Cena": 110
            }
          ]
        }
      ]
    },
    {
      "Name": "Potrefená husa",
      "Locale": "Brno",
      "Body": [
        {
          "Date": "22.11.2017",
          "MenuList": [
            {
              "Menu": "Text menu22.",
              "Cena": 122
            },
            {
              "Menu": "Text menu22.",
              "Cena": 95
            },
            {
              "Menu": "Text menu.",
              "Cena": 110
            }
          ]
        }
      ]
    }
  ]
}
```

### Nástroje:
[Dillinger](https://dillinger.io/) pro ReadMe

[JSON Editor Online](http://jsoneditoronline.org/) pro Json objects

License
----

MIT