id=${1}
tasks_dir=/home/zyj/web/tasks
in_file=Inputs/RF00167.afa.txt
out_file=Outputs/dca.out
cd /home/zyj/Zhao-Lab-service/DCA
cp ${tasks_dir}/${id}/msa_file ${in_file}
cat DCAanalysis.m | /usr/local/MATLAB/R2015b/bin/matlab -nodisplay
cp ${out_file} ${tasks_dir}/${id}/result
