1. Zašto koristimo JSON?

- JSON je format za memorisanje razmenu podataka koji se temelji na sintaksi JavaScript objekata. 
Predstavlja vrlo pogodan format za razmenjivanje podataka između klijenta i servera,
zato što je čoveku lak za razumevanje, a sa druge strane je jednostavan za obradu i parsiranje. 
Pošto je JSON tekst, mi možemo JavaScript objekte konvetovati u JSON tekst i poslati ih serveru ( ili sačuvati u lokalni fajl). Takođe, možemo konvertovati JSON tekst primljen od servera u JavaScript objekat.



2. Zašto su moduli korisni? + Primer

- Moduli pre svega omogućavaju da nam kodovi budu pregledni i laki za održavanje. 
Glavna ideja iza modula je omogućavanje importovanja i eksportovanje delova koda iz različitih fajlova
u neke druge fajlove. Ovo nam omogućava da razlomimo kod u manje fajlove, što čini kod čitljivjim i razumljivijim. 


3. Šta je ECMAScript? 

-ECMAScript predstavlja standard za skriptne jezike. Određuje osnovne karakteristike koje bi skriptni jezik trebalo da pruži i kako te funkcije treba da budu primenjene. Jezici kao što su JavaScript, JScript, ActionScript su bazirani na ECMAScript standardu. JavaScript je najpopularnija implementacija ECMAScript standarda. 
ECMA je akronim za European Computer Manufacturer’s Association. 


4. Opišite kako funkcionišu HTTP zahtevi i šta je to REST API.

- HTTP (HyperText Transfer Protocol) predstavlja protokol za komunikaciju klijenta i servera, a radi na principu zahteva i odgovora. 
HTTP klijent otvara konekciju i šalje zahtev HTTP serveru, a server zatim vraća odgovor klijentu. Nakon slanja odgovora, server zatvara konekciju. Format zahteva i odgovora izgleda ovako:
* inicijalna linija 
* nula ili više linija u zaglavlju,
* prazna linija,
* opcionalno - telo poruke koje može biti fajl, tekst itd.
- Inicijalna linija zahteva sadrži ime HTTP metode (GET - nalaže serveru da klijentu dostavi tražene resurse koje se
nalaze na izabranoj URL adresi; POST - ovim se mogu kreirati novi ili ažurirati stari resursi na serveru; HEAD traži odgovor koji je isti odgovoru dobijenom GET metodom ali bez tela poruke; DELETE - briše izabrani resurs na serveru bez ikakvog upozorenja), lokalnu putanju traženog resursa (putanja je deo URL-a nakon imena host-a) i verziju HTTP-a koji se koristi. 

- REST (Representational State Transfer) se odnosi na stil kreiranja API-ja. Baziran je na HTTP protokolu, odnosno, oslanja se na korišćenje jednostavnog HTTP protokola za uspostavljanje konekcije, umesto oslanjanja na kompleksne web servise kao što je SOAP. 
Servisi koji koriste REST paradigmu se nazivaju RESTful web servisi. RESTful se izdvojio kao dominantan mrežni servis jer je veoma fleksibilan i jednostavan.


5. Koja je razlika između == i === ?
- == se koristi za poređenje između dve promenljive, bez obzira na tip podataka promenljive, dok se
=== koristi za poređenje dve promenljive, ali ovo će proveriti tip podataka i uporediti dve vrednosti. 

- Kad uporedimo dve promenljive različitog tipa, npr. boolean sa stringom ili broj sa stringom koristeći == operator, on automatski pretvara jednu vrstu u drugu i vraća vrednost zasnovanu na jednakosti sadržaja, dok je === operator strogi operator jednakosti i vraća se true ako su obe promenljive iste vrste i sadrže istu vrednost. 
Što znači da koristeći trostruki znak jednakosti, vrednosti moraju biti jednake i po tipu. 

- Na primer:
2=="2"     // true, automatski, broj konvertovan u string
2==="2"    // false, zato što nisu istog tipa


6. Šta vraća console.log(typeof typeof true)? Objasniti zašto

- Vraća "string". 
Verovatno zato što je typeof true = "boolean", a onda je typeof toga = string. 