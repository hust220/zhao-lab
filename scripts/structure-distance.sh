id=$1

tasks_dir=/home/zyj/web/tasks

cd /home/zyj/Zhao-Lab-service/structure-distance

./distance ${tasks_dir}/$id/pdb_file >${tasks_dir}/$id/result

cd -
