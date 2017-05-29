id=${1}
tasks_dir=/home/zyj/web/tasks
task_dir=${tasks_dir}/${id}
cd /home/zyj/Zhao-Lab-service/complex-distance
if [ -f ${task_dir}/pdb ]; then
  cp ${task_dir}/pdb ./${id}.pdb
else
  cp ${task_dir}/pdb_file ./${id}.pdb
fi
./distance ${id}.pdb >${i}.result
cp ${i}.result ${tasks_dir}/${id}/result
#rm -f ${id}.pdb ${id}.result
