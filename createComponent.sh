# filename: createComponent.sh
cd components/
echo "What's your component name?"
read name
echo `mkdir $name`
cd $name/
#создание самого компоента
echo -e "<template lang=\"pug\">\n  include ./"$name".pug\n</template>\n\n<script>\nexport default {\n  name: '"$name"'\n}\n</script>\n\n<style lang=\"scss\">\n@import \"./"$name".scss\";\n</style>" > "$name"".vue"
#создание файла стилей
echo "" > "$name"".scss"
#создание файла разметки
echo "" > "$name"".pug"
#создание файла историй
echo "" > story.stories.js
