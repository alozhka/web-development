PROGRAM SarahRevere(INPUT, OUTPUT);
USES Dos;

BEGIN {SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  IF GetEnv('QUERY_STRING') = 'Lanterns=1'
  THEN
    WRITELN('The British are coming by sea.');
  IF GetEnv('QUERY_STRING') = 'Lanterns=2'
  THEN
    WRITELN('The British are coming by land');
  WRITELN
END. {SarahRevere}

